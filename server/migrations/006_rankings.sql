-- Public aggregate snapshots, isolated per game; never include unit inventories.
ALTER TABLE games ADD COLUMN rankings jsonb CHECK(rankings IS NULL OR jsonb_typeof(rankings)='object');
INSERT INTO migrations VALUES('006_rankings');

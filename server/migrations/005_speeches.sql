-- Text, structured evaluations, outcomes, effects and promises live in the
-- authoritative participant snapshot, committed alongside the command ID.
ALTER TABLE participants ADD CONSTRAINT speeches_object CHECK(state->'speeches' IS NULL OR jsonb_typeof(state->'speeches')='object');
INSERT INTO migrations VALUES('005_speeches');

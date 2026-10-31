-- One shared donor ledger per game; updated under existing SELECT FOR UPDATE lock.
ALTER TABLE games ADD COLUMN aid_state jsonb CHECK(aid_state IS NULL OR jsonb_typeof(aid_state)='object');
INSERT INTO migrations VALUES('004_ai_aid');

-- Security snapshots remain authoritative alongside economy/orders.
-- Lazy initialization uses a server-generated random seed, never a client seed.
ALTER TABLE participants ADD CONSTRAINT security_snapshot_object CHECK(state->'security' IS NULL OR jsonb_typeof(state->'security')='object');
CREATE TABLE security_incidents(
 game_id uuid NOT NULL,
 user_id uuid NOT NULL,
 id text NOT NULL,
 payload jsonb NOT NULL CHECK(jsonb_typeof(payload)='object'),
 PRIMARY KEY(game_id,user_id,id),
 FOREIGN KEY(game_id,user_id) REFERENCES participants(game_id,user_id) ON DELETE CASCADE
);
CREATE INDEX security_incidents_country_idx ON security_incidents((payload->>'country'));
INSERT INTO migrations VALUES('003_security');

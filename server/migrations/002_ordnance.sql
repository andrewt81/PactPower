-- Existing authoritative participant snapshots acquire explicit weapon stock and assignments.
UPDATE participants SET state=jsonb_set(jsonb_set(state,'{ordnanceStock}',COALESCE(state->'ordnanceStock','{}'::jsonb)),'{defenseSites}',COALESCE(state->'defenseSites','{}'::jsonb));
ALTER TABLE participants ADD CONSTRAINT ordnance_stock_object CHECK(jsonb_typeof(COALESCE(state->'ordnanceStock','{}'::jsonb))='object');
ALTER TABLE participants ADD CONSTRAINT defense_sites_object CHECK(jsonb_typeof(COALESCE(state->'defenseSites','{}'::jsonb))='object');
-- Immutable expenditure ledger. A command/item can be recorded once, in the same
-- transaction as the inventory debit and accepted command.
CREATE TABLE weapon_expenditures(
 game_id uuid NOT NULL,user_id uuid NOT NULL,command_id uuid NOT NULL,
 item_id text NOT NULL,quantity integer NOT NULL CHECK(quantity>0),
 PRIMARY KEY(game_id,user_id,command_id,item_id),
 FOREIGN KEY(game_id,user_id,command_id) REFERENCES commands(game_id,user_id,id)
);
INSERT INTO migrations VALUES('002_ordnance');

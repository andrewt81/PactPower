ALTER TABLE users ADD COLUMN language text CHECK(language IN ('it','en','fr','de','es'));
INSERT INTO migrations VALUES('007_language');

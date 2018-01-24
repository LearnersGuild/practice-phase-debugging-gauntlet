CREATE TABLE species (
  species_id SERIAL PRIMARY KEY,
  species_name TEXT
);

CREATE TABLE pets (
  pet_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  species_id INTEGER REFERENCES species
);

CREATE TABLE owners (
  owner_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE petowners (
  petowner_id SERIAL PRIMARY KEY,
  pet_id INTEGER REFERENCES pets,
  owner_id INTEGER REFERENCES owners
);

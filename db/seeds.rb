User.create!([
  { name: Faker::StarWars.character, token: Faker::Bitcoin.address },
  { name: Faker::StarWars.character, token: Faker::Bitcoin.address },
  { name: Faker::StarWars.character, token: Faker::Bitcoin.address },
  { name: Faker::StarWars.character, token: Faker::Bitcoin.address },
  { name: Faker::StarWars.character, token: Faker::Bitcoin.address }
])

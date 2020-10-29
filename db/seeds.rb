# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Photo.destroy_all

user1 = User.create!(username: "nathan0922", email:"nathan@yahoo.com" ,password: "123456")
user2 = User.create!(username: "adelq", email:"adel@yahoo.com" ,password: "123456")
user3 = User.create!(username: "amanfik", email:"kwasix@yahoo.com" ,password: "123456")
user4 = User.create!(username: "raxgrix", email:"rax@yahoo.com" ,password: "123456")

photo1 = Photo.create!(title: 'Andriyko', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'New York, New York', photographer_id: user1.id, photographer_name: user1.username)
photo2 = Photo.create!(title: 'Andriyko', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'New York, New York', photographer_id: user1.id, photographer_name: user1.username)
photo3 = Photo.create!(title: 'Clayton', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'New York, New York', photographer_id: user1.id, photographer_name: user1.username)
photo4 = Photo.create!(title: 'Dasha', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Brooklyn, New York', photographer_id: user1.id, photographer_name: user1.username)
photo5 = Photo.create!(title: 'Diego', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Brooklyn, New York', photographer_id: user1.id, photographer_name: user1.username)
photo6 = Photo.create!(title: 'Gabriel', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Brooklyn, New York', photographer_id: user1.id, photographer_name: user1.username)
photo7 = Photo.create!(title: 'Gio', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Iceland', photographer_id: user1.id, photographer_name: user1.username)
photo8 = Photo.create!(title: 'Ian', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Iceland', photographer_id: user1.id, photographer_name: user1.username)
photo9 = Photo.create!(title: 'Ilya', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Iceland', photographer_id: user1.id, photographer_name: user1.username)
photo10 = Photo.create!(title: 'Ilya', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Iceland', photographer_id: user2.id, photographer_name: user2.username)
photo11 = Photo.create!(title: 'Ilya', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Iceland', photographer_id: user2.id, photographer_name: user2.username)
photo12 = Photo.create!(title: 'Jason', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Arctic Circle', photographer_id: user2.id, photographer_name: user2.username)
photo13 = Photo.create!(title: 'Jeroen', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Arctic Circle', photographer_id: user2.id, photographer_name: user2.username)
photo14 = Photo.create!(title: 'Josephine', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Arctic Circle', photographer_id: user2.id, photographer_name: user2.username)
photo15 = Photo.create!(title: 'Jusdevoyage', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Arctic Circle', photographer_id: user3.id, photographer_name: user3.username)
photo16 = Photo.create!(title: 'Jusdevoyage', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Arctic Circle', photographer_id: user3.id, photographer_name: user3.username)
photo17 = Photo.create!(title: 'Marek', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Arctic Circle', photographer_id: user3.id, photographer_name: user3.username)
photo18 = Photo.create!(title: 'Mario', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Anchorage, Alaska', photographer_id: user3.id, photographer_name: user3.username)
photo19 = Photo.create!(title: 'Natalia', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Anchorage, Alaska', photographer_id: user3.id, photographer_name: user3.username)
photo20 = Photo.create!(title: 'Raphael', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Anchorage, Alaska', photographer_id: user3.id, photographer_name: user3.username)
photo21 = Photo.create!(title: 'Riley', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'North Pole', photographer_id: user3.id, photographer_name: user3.username)
photo22 = Photo.create!(title: 'Riley', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'North Pole', photographer_id: user3.id, photographer_name: user3.username)
photo23 = Photo.create!(title: 'Slon', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'North Pole', photographer_id: user3.id, photographer_name: user3.username)
photo24 = Photo.create!(title: 'Stellar Striked', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'North Pole', photographer_id: user4.id, photographer_name: user4.username)
photo25 = Photo.create!(title: 'Tadeusz', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'North Pole', photographer_id: user4.id, photographer_name: user4.username)
photo26 = Photo.create!(title: 'Tahoe', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'North Pole', photographer_id: user4.id, photographer_name: user4.username)
photo27 = Photo.create!(title: 'Taylor', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Seattle, Washington', photographer_id: user4.id, photographer_name: user4.username)
photo28 = Photo.create!(title: 'Coco', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Seattle, Washington', photographer_id: user4.id, photographer_name: user4.username)
photo29 = Photo.create!(title: 'Ying', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Seattle, Washington', photographer_id: user4.id, photographer_name: user4.username)
photo30 = Photo.create!(title: 'The BEST Doggo', description: 'Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis.', location: 'Seattle, Washington', photographer_id: user1.id, photographer_name: user1.username)


photo1.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/ilya-shishikhin-a01Y4ijMFRA-unsplash.jpg'), filename: 'ilya-shishikhin-a01Y4ijMFRA-unsplash.jpg')
photo2.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/andriyko-podilnyk-M4NYOsSre6g-unsplash.jpg'), filename: 'andriyko-podilnyk-M4NYOsSre6g-unsplash.jpg')
photo3.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/clayton-caldwell-yMTb07aTw3I-unsplash.jpg'), filename: 'clayton-caldwell-yMTb07aTw3I-unsplash.jpg')
photo4.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/dasha-urvachova-FvnzW-aS2lc-unsplash.jpg'), filename: 'dasha-urvachova-FvnzW-aS2lc-unsplash.jpg')
photo5.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/diego-moura-rbxmt02vy6w-unsplash.jpg'), filename: 'diego-moura-rbxmt02vy6w-unsplash.jpg')
photo6.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/gabriel-griego--Fgqk817ZF4-unsplash.jpg'), filename: 'gabriel-griego--Fgqk817ZF4-unsplash.jpg')
photo7.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/gio-bartlett-YJ7p7QwklD0-unsplash.jpg'), filename: 'gio-bartlett-YJ7p7QwklD0-unsplash.jpg')
photo8.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/ian-kCvy8Kr53yU-unsplash.jpg'), filename: 'ian-kCvy8Kr53yU-unsplash.jpg')
photo9.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/ilya-shishikhin-HrmcbJY0WbE-unsplash.jpg'), filename: 'ilya-shishikhin-HrmcbJY0WbE-unsplash.jpg')
photo10.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/ilya-shishikhin-SCIRnLEtqWc-unsplash.jpg'), filename: 'ilya-shishikhin-SCIRnLEtqWc-unsplash.jpg')
photo11.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/ilya-shishikhin-a01Y4ijMFRA-unsplash.jpg'), filename: 'ilya-shishikhin-a01Y4ijMFRA-unsplash.jpg')
photo12.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/jason-leung-lYsUDvZfWxw-unsplash.jpg'), filename: 'jason-leung-lYsUDvZfWxw-unsplash.jpg')
photo13.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/jeroen-bosch-GKkIHrSCuPk-unsplash.jpg'), filename: 'jeroen-bosch-GKkIHrSCuPk-unsplash.jpg')
photo14.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/josephine-amalie-paysen--XW35nYkRnk-unsplash.jpg'), filename: 'josephine-amalie-paysen--XW35nYkRnk-unsplash.jpg')
photo15.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/jusdevoyage-7e9S9Xl4gVc-unsplash.jpg'), filename: 'jusdevoyage-7e9S9Xl4gVc-unsplash.jpg')
photo16.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/jusdevoyage-poPdxlcLbhI-unsplash.jpg'), filename: 'jusdevoyage-poPdxlcLbhI-unsplash.jpg')
photo17.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/marek-szturc-HEYJY7l8QVI-unsplash.jpg'), filename: 'marek-szturc-HEYJY7l8QVI-unsplash.jpg')
photo18.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/mario-cannata-xPFvQgiP1Ag-unsplash.jpg'), filename: 'mario-cannata-xPFvQgiP1Ag-unsplash.jpg')
photo19.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/nataliia-kvitovska-FZyteTJO3Dc-unsplash.jpg'), filename: 'nataliia-kvitovska-FZyteTJO3Dc-unsplash.jpg')
photo20.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/raphael-renter-491PEhjHNGg-unsplash.jpg'), filename: 'raphael-renter-491PEhjHNGg-unsplash.jpg')
photo21.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/riley-sullivan-kTb76cLODyE-unsplash.jpg'), filename: 'riley-sullivan-kTb76cLODyE-unsplash.jpg')
photo22.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/riley-sullivan-khNqqoG6GqE-unsplash.jpg'), filename: 'riley-sullivan-khNqqoG6GqE-unsplash.jpg')
photo23.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/slon-v-kashe-rwYkKdC3a9s-unsplash.jpg'), filename: 'slon-v-kashe-rwYkKdC3a9s-unsplash.jpg')
photo24.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/stellarstriked-jaacxH9ZiEc-unsplash.jpg'), filename: 'stellarstriked-jaacxH9ZiEc-unsplash.jpg')
photo25.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/tadeusz-lakota-PJLjz8uLys0-unsplash.jpg'), filename: 'tadeusz-lakota-PJLjz8uLys0-unsplash.jpg')
photo26.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/tahoe-eQHZIyhlyU4-unsplash.jpg'), filename: 'tahoe-eQHZIyhlyU4-unsplash.jpg')
photo27.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/taylor-Qvwl_jOJxfs-unsplash.jpg'), filename: 'taylor-Qvwl_jOJxfs-unsplash.jpg')
photo28.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/ud-a-ADGuNoWP76k-unsplash.jpg'), filename: 'ud-a-ADGuNoWP76k-unsplash.jpg')
photo29.photo.attach(io: open('https://pxelation-seeds.s3.amazonaws.com/ying-zhu-4UZfmxvc5Qk-unsplash.jpg'), filename: 'ying-zhu-4UZfmxvc5Qk-unsplash.jpg')
photo30.photo.attach(io: open('https://pxelation-dev.s3.amazonaws.com/looking.jpg'), filename: 'looking.jpg')

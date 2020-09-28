# == Schema Information
#
# Table name: photos
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  description     :string
#  location        :string
#  photographer_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Photo < ApplicationRecord 

    validates :title, presence: true

    belongs_to :photographer,
        foreign_key: :photographer_id,
        class_name: :User

end

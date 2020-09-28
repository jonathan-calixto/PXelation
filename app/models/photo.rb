validates :title, presence: true

belongs_to :photographer,
    foreign_key: :photographer_id,
    class_name: :User


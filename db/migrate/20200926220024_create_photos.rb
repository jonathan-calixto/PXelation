class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.string :description
      t.string :location
      t.integer :photographer_id

      t.timestamps
    end

    add_index :photos, :title
    add_index :photos, :photographer_id
  end
end

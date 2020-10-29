class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :photos, :photographer, :photographer_name
  end
end

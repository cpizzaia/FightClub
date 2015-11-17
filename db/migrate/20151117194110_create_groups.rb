class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :title, null: false
      t.integer :organizer_id, null: false
      t.text :description, null: false
      t.string :image, null: false

      t.timestamps null: false
    end
  end
end

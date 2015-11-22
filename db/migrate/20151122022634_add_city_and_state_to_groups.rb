class AddCityAndStateToGroups < ActiveRecord::Migration
  def change
    add_column :groups, :city, :string, null: false
    add_column :groups, :state, :string, null: false
  end
end

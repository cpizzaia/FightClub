class AddIndexToOrganizerId < ActiveRecord::Migration
  def change
    add_index :groups, :organizer_id
  end
end

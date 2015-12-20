class FixemailColumnName < ActiveRecord::Migration
  def change
    rename_column :users, :useremail, :email
  end
end

class AddMemberNounToGroups < ActiveRecord::Migration
  def change
    add_column :groups, :member_noun, :string, null: false, default: "Members"
  end
end

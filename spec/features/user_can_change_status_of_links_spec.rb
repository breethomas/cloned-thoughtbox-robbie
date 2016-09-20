require 'rails_helper'

RSpec.feature "User change read status of links" do
  scenario "mark a link as read", :js => true do
    user = User.create(email: "Robbie1", password: "password")
    user.links.create(title: "NEW", url: "https://www.google.com")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path

    click_button("Mark as Read")

    expect(page).to have_content "Mark as Unread"
  end

  scenario "mark a link as unread", :js => true do
    user = User.create(email: "Robbie1", password: "password")
    user.links.create(title: "NEW", url: "https://www.google.com", read: true)
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path

    click_button("Mark as Unread")

    expect(page).to have_content "Mark as Read"
  end
end

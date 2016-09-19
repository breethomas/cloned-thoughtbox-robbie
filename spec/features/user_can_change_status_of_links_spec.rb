require 'rails_helper'

RSpec.feature "User change read status of links" do
  scenario "mark a link as read", :js => true do
    user = User.create(email: "Robbie", password: "password")
    user.links.create(title: "New Link", url: "https://www.google.com")

    visit login_path

    fill_in "Email", with: "Robbie"
    fill_in "Password", with: "password"
    click_button("Login")

    expect(page).to have_content "Logout"
    expect(page).to have_content "Hello!"

    expect(page).to have_content "New Link"
    expect(page).to have_content "https://www.google.com"

    click_button("Mark as Read")

    expect(page).to have_content "Mark as Unread"
  end
end

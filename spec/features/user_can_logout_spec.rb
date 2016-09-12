require 'rails_helper'

RSpec.feature "User can logout" do
  scenario "they are directed to the login page" do
    user = User.create(email: "Robbie1", password: "password")

    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path
    expect(page).to_not have_content "Login"
    click_on("Logout")

    expect(page).to have_content "Goodbye!"
    expect(page).to have_content "Hi! Login To Your Account"
  end
end

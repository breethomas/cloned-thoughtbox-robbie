require 'rails_helper'

RSpec.feature "User can filter links by read status" do
  scenario "Can filter by read", :js => true do
    user = User.create(email: "Robbie1", password: "password")
    user.links.create(title: "Shown?", url: "https://www.google.com", read: true)
    user.links.create(title: "Hidden?", url: "https://www.google.com")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path

    expect(page).to have_content "Shown?"
    expect(page).to have_content "Hidden?"

    choose("Show Read")

    expect(page).to have_content "Shown?"
    expect(page).to_not have_content "Hidden?"
  end

  scenario "Can filter by unread", :js => true do
    user = User.create(email: "Robbie1", password: "password")
    user.links.create(title: "Shown?", url: "https://www.google.com")
    user.links.create(title: "Hidden?", url: "https://www.google.com", read: true)
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path

    expect(page).to have_content "Shown?"
    expect(page).to have_content "Hidden?"

    choose("Show Unread")

    expect(page).to have_content "Shown?"
    expect(page).to_not have_content "Hidden?"
  end

  scenario "Can show all after filtered", :js => true do
    user = User.create(email: "Robbie1", password: "password")
    user.links.create(title: "Shown?", url: "https://www.google.com")
    user.links.create(title: "Hidden?", url: "https://www.google.com", read: true)
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit links_path

    choose("Show Unread")

    expect(page).to have_content "Shown?"
    expect(page).to_not have_content "Hidden?"

    choose("Show All")

    expect(page).to have_content "Shown?"
    expect(page).to have_content "Hidden?"
  end
end

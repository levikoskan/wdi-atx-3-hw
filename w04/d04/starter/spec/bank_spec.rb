require_relative 'spec_helper'
require_relative '../bank'
p "hello"
describe Bank do
<<<<<<< HEAD
  bank = Bank.new "Lucky"

=======
p "hello"
>>>>>>> 29252fb422b89c4863a9c11fdb29f535f41d624d
  describe ".new" do
    it "creates a Bank object" do
      # When Bank.new is called, it should create a bank object\
      expect(bank.class).to be(Bank)
    end
    it "has no accounts" do
      # A newly created bank should have 0 accounts
      expect(bank.accounts).to be_empty
    end
  end

  describe "#name" do
    it "has a name" do
      # Calling bank.name should give us the bank's name
        expect(bank.name).to eq("Lucky")
    end
  end

  describe "#create_account" do
    it "create an account" do
<<<<<<< HEAD
      # Calling bank.create_account with the correct parameters should add
      # the account name and account value to the bank.accounts hash
      bank.create_account("MoeMoney", 500)
      expect(bank.accounts).to have_key("MoeMoney")
=======
      bank = Bank.new("Chase")
      bank.create_account("Tom", 200)
      toms_account = accounts["Tom"]
      expect (toms_account).to eq(200)
>>>>>>> 29252fb422b89c4863a9c11fdb29f535f41d624d
    end
  end

  describe "#deposit" do
    it "deposits money from a client" do
      # Calling bank.deposit with the correct parameters should result in an account's value going up by the same amount as the deposit
      bank.deposit("MoeMoney", 20)

      expect(bank.accounts["MoeMoney"]).to have_value(520)
    end
  end

  describe "#balance" do
    it "returns the balance for the client" do
      # Calling bank.balance should return the balance of the specified account
      bank.balance("MoeMoney")

      expect(bank.accounts["MoeMoney"]).to eq
    end
  end

  describe "#withdraw" do
    it "subtracts money from the account" do
      # Calling bank.withdraw with the correct parameters should result in an account's value going down by the same amount as the withdrawal

    end

    it "ignores requests for withdrawals greater than account balance" do
      # Calling bank.withdraw with an amount greater than the balance ignores the withdrawal/does nothing

    end
  end

end

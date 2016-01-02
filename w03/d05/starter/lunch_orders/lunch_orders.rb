orders = {}

def lunch_order()

  prints "Name of order:"
  name = gets.chomp
  name.capitalize!

  prints "#{name} wants to order:"
  food = gets.chomp

  order_complete()

  def order_complete()
    prints "Done with order? y/n?"
    done_ordering = gets.chomp
    done_ordering.downcase!

    if done_ordering != "y" || "n"
        print "Please resopond with y/n"
        order_complete()
    elsif done_ordering == "y"
        #do something here
    else
      lunch_order()
    end
  end
end

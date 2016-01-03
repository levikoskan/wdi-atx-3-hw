$orders = {}


def foodOrder
    puts "Name of order:"
    $name = gets.chomp
    $name.capitalize!
    $orders[$name] = ''

    puts "#{$name} wants to order:"


def add_Another
    puts "Add another item to the order? (y/n)"
        answer = gets.chomp.downcase
        if answer == "y"
            puts "What else would you like?"
            order
        elsif answer == "n"
            puts "Great, will anyone else like to order? (y/n)"
            anyoneElse = gets.chomp.downcase
                if anyoneElse == "y"
                    foodOrder
                else puts "All orders " + $orders.to_s
                end
        else puts "you suck, enter y/n"
            #Add another item method
            add_Another
        end
   end

   def order
    $food = ''
    $food += gets.chomp + " "
    $orders[$name] << $food
    add_Another
    end

    order
end
    foodOrder

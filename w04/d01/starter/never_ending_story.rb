$story = [
  'Fry is born without a delta brainwave',
  'As a result, Fry is cryogenically frozen until 2999',
  'In the future, Fry works on a spaceship',
  'The spaceship hits a wormhole and crashes in 1941 Roswell, NM',
  'Fry encounters his grandmother, then inadvertently sires his father'
]


begin
    story.each do |story_line|
        puts story_line
        puts "Do we continue? (y/n)"
            continue = gets.chomp
            continue.downcase!
            raise if story_line == story[4]
            next if continue == "y"
            break if continue == "n"

    end
        rescuey
            retry
end


# $story_line = 0

# def start
#     puts $story[0]
#     exit_option
# end

# def exit_option
#     puts "Should we continue? (y/n)"
#     continue = gets.chomp
#     continue.downcase!
#     if (continue == 'n')
#          puts "You don't want to hear any more! fine no more!"
#      elsif (continue == 'y')
#          if $story_line >= $story.length
#                  $story_line = 0
#                  start
#         else
#             $story_line += 1
#             puts $story[$story_line]
#             exit_option
#         end

#     else
#         exit_option
#     end
# end

# start

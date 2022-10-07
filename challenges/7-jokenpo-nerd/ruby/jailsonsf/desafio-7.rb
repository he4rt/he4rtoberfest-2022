test_cases = gets.to_i

posibilities = {
  pedra: %i[lagarto tesoura],
  papel: %i[pedra spock],
  tesoura: %i[papel lagarto],
  lagarto: %i[spock papel],
  spock: %i[tesoura pedra]
}

def game_result(player_one, player_two, posibilities)
  if player_one == player_two
    'empate'
  elsif posibilities[player_one].include?(player_two)
    'rajesh'
  else
    'sheldon'
  end
end

(1..test_cases).each do |_i|
  player_one, player_two = gets.split.map(&:downcase)

  puts game_result(player_one.to_sym, player_two.to_sym, posibilities)
end

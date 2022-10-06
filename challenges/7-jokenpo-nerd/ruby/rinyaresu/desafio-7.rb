# frozen_string_literal: true

require 'minitest/autorun'
require 'minitest/pride'

class Game
  def initialize
    @options = {
      'pedra' => %w[tesoura lagarto],
      'papel' => %w[pedra spock],
      'tesoura' => %w[papel lagarto],
      'lagarto' => %w[papel spock],
      'spock' => %w[tesoura pedra]
    }
  end

  def winner?(player1, player2)
    return 'empate' if player1 == player2

    @options[player1].include?(player2) ? 'rajesh' : 'sheldon'
  end
end

game = Game.new
n = gets.to_i
n.times do
  player1, player2 = gets.split
  puts game.winner?(player1, player2)
end

class GameTest < Minitest::Test
  def setup
    @game = Game.new
  end

  def test_winner
    assert_equal 'rajesh', @game.winner?('lagarto', 'spock')
    assert_equal 'sheldon', @game.winner?('tesoura', 'spock')
    assert_equal 'empate', @game.winner?('spock', 'spock')
  end
end

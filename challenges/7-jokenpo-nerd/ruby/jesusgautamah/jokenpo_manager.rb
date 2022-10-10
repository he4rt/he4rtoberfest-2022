# frozen_string_literal: true

require_relative 'jokenpo_resolver'

# The main class to execute the jokenpo game
class JokenpoManager
  def initialize
    @jokenpo_resolver = JokenpoResolver.new
  end

  def run_in_times(times)
    times.times do
      run
    end
  end

  private

  def run
    puts 'Digite as duas escolhas separadas por espaço'
    player1, player2 = STDIN.gets.split(' ')
    @jokenpo_resolver.resolve(player1, player2)
  end
end

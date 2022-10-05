# frozen_string_literal: true

# Class to resolve the jokenpo game
class JokenpoResolver
  CHOICES = %w[pedra papel tesoura lagarto spock].freeze
  def resolve(player1, player2)
    puts winner(player1, player2)
  end

  private

  def winner(player1, player2)
    return 'Ambos venceram' if player1 == player2

    if player1 == 'tesoura' && player2 == 'papel'
      'Jogador 1 venceu'
    elsif player1 == 'papel' && player2 == 'pedra'
      'Jogador 1 venceu'
    elsif player1 == 'pedra' && player2 == 'lagarto'
      'Jogador 1 venceu'
    elsif player1 == 'lagarto' && player2 == 'spock'
      'Jogador 1 venceu'
    elsif player1 == 'spock' && player2 == 'tesoura'
      'Jogador 1 venceu'
    elsif player1 == 'tesoura' && player2 == 'lagarto'
      'Jogador 1 venceu'
    elsif player1 == 'lagarto' && player2 == 'papel'
      'Jogador 1 venceu'
    elsif player1 == 'papel' && player2 == 'spock'
      'Jogador 1 venceu'
    elsif player1 == 'spock' && player2 == 'pedra'
      'Jogador 1 venceu'
    elsif player1 == 'pedra' && player2 == 'tesoura'
      'Jogador 1 venceu'
    elsif player1 == 'pedra' && player2 == 'spock'
      'Jogador 2 venceu'
    end
  end
end

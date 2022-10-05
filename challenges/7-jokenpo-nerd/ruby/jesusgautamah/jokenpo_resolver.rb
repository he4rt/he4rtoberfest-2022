# frozen_string_literal: true

# Class to resolve the jokenpo game
class JokenpoResolver
  TESOURA = %w[papel lagarto].freeze
  PAPEL = %w[pedra spock].freeze
  PEDRA = %w[tesoura lagarto].freeze
  LAGARTO = %w[spock papel].freeze
  SPOCK = %w[tesoura pedra].freeze
  PLAYERONE="sheldon"
  PLAYERTWO="rajesh"

  def resolve(player1, player2)
    @sheldon_play = player1
    @rajesh_play = player2
    puts winner
  end

  private

  attr_reader :sheldon_play, :rajesh_play

  def winner
    return 'empate' if sheldon_play == rajesh_play

    return PLAYERONE if sheldon_scissors?
    return PLAYERONE if sheldon_paper?
    return PLAYERONE if sheldon_rock?
    return PLAYERONE if sheldon_lizard?
    return PLAYERONE if sheldon_spock?

    PLAYERTWO
  end

  def sheldon_scissors?
    TESOURA.include?(rajesh_play) && sheldon_play == 'tesoura'
  end

  def sheldon_paper?
    PAPEL.include?(rajesh_play) && sheldon_play == 'papel'
  end

  def sheldon_rock?
    PEDRA.include?(rajesh_play) && sheldon_play == 'pedra'
  end

  def sheldon_lizard?
    LAGARTO.include?(rajesh_play) && sheldon_play == 'lagarto'
  end

  def sheldon_spock?
    SPOCK.include?(rajesh_play) && sheldon_play == 'spock'
  end
end

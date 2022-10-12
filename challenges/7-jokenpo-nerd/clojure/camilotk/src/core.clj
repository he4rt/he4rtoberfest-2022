(ns core)

(def resultados (atom []))


(defn computa-partida!
  [jogador-1 jogada-1 jogador-2 jogada-2]
  (cond
    ;; Pedra quebra tesoura
    (and (= jogada-1 "pedra") (= jogada-2 "tesoura")) (swap! resultados conj jogador-1)
    (and (= jogada-1 "tesoura") (= jogada-2 "pedra")) (swap! resultados conj jogador-2)
    ;; Tesoura corta papel
    (and (= jogada-1 "tesoura") (= jogada-2 "papel")) (swap! resultados conj jogador-1)
    (and (= jogada-1 "papel") (= jogada-2 "tesoura")) (swap! resultados conj jogador-2)
    ;; Papel cobre pedra
    (and (= jogada-1 "papel") (= jogada-2 "pedra")) (swap! resultados conj jogador-1)
    (and (= jogada-1 "pedra") (= jogada-2 "papel")) (swap! resultados conj jogador-2)
    ;; Pedra derruba lagarto...
    (and (= jogada-1 "pedra") (= jogada-2 "lagarto")) (swap! resultados conj jogador-1)
    (and (= jogada-1 "lagarto") (= jogada-2 "pedra")) (swap! resultados conj jogador-2)
    ;; Lagarto adormece Spock
    (and (= jogada-1 "lagarto") (= jogada-2 "spock")) (swap! resultados conj jogador-1)
    (and (= jogada-1 "spock") (= jogada-2 "lagarto")) (swap! resultados conj jogador-2)
    ;; Spock derrete tesoura
    (and (= jogada-1 "spock") (= jogada-2 "tesoura")) (swap! resultados conj jogador-1)
    (and (= jogada-1 "tesoura") (= jogada-2 "spock")) (swap! resultados conj jogador-2)
    ;; Tesoura decapita lagarto
    (and (= jogada-1 "tesoura") (= jogada-2 "lagarto")) (swap! resultados conj jogador-1)
    (and (= jogada-1 "lagarto") (= jogada-2 "tesoura")) (swap! resultados conj jogador-2)
    ;; Lagarto come papel
    (and (= jogada-1 "lagarto") (= jogada-2 "papel")) (swap! resultados conj jogador-1)
    (and (= jogada-1 "papel") (= jogada-2 "lagarto")) (swap! resultados conj jogador-2)
    ;; Papel refuta Spock
    (and (= jogada-1 "papel") (= jogada-2 "spock")) (swap! resultados conj jogador-1)
    (and (= jogada-1 "spock") (= jogada-2 "papel")) (swap! resultados conj jogador-2)
    ;; Spock vaporiza a pedra
    (and (= jogada-1 "spock") (= jogada-2 "pedra")) (swap! resultados conj jogador-1)
    (and (= jogada-1 "pedra") (= jogada-2 "spock")) (swap! resultados conj jogador-2)
    :else (println "jogada inválida")))


(defn imprime-resultados!
  []
  (dorun (map #(println %) @resultados)))


(defn -main
  "Função main. "
  [& args]

  (.print (System/out) "Nome do primeiro jogador: ")
  (flush)
  (def jogador-1  (read-line))
  (.print (System/out) "Nome do segundo jogador: ")
  (flush)
  (def jogador-2  (read-line))
  (.print (System/out) "Número de partidas: ")
  (flush)
  (def partidas  (Integer/parseInt (read-line)))

  (println "O jogo começou...")
  (loop [jogada (clojure.string/split (read-line) #"\s")
         i 0]
    (computa-partida! jogador-1 (first jogada) jogador-2 (second jogada))
    (if (< i partidas)
      (recur (clojure.string/split (read-line) #"\s") (inc i))
      :ok))
  (println "Computando...")
  (Thread/sleep 500)
  (println "Os resultados foram...")
  (imprime-resultados!)
  :ok)

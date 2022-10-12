(ns core-test
  (:require
    [clojure.test :refer :all]
    [core :refer :all]))


(deftest fizz-buzz-test
  (testing "se o resultado correto."
    (reset! resultados [])
    (is (do (computa-partida! "A" "lagarto" "B" "spock")
            (= @resultados ["A"])))
    (is (do (computa-partida! "A" "lagarto" "B" "pedra")
            (= @resultados ["A" "B"])))
    (is (do (computa-partida! "A" "papel" "B" "tesoura")
            (= @resultados ["A" "B" "B"])))
    (is (do (computa-partida! "A" "papel" "B" "pedra")
            (= @resultados ["A" "B" "B" "A"])))))


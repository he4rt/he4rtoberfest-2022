(ns core-test
  (:require
    [clojure.test :refer :all]
    [core :refer :all]))


(deftest atualiza-total-test
  (testing "se o total é atualizado."
    ;; necessário resetar o estado
    (reset! cobaias {:coelhos 0 :ratos 0 :sapos 0 :total 0})
    ;; testes
    (is (do (atualiza-total! 3 "R")
            (= @cobaias {:coelhos 0 :ratos 3 :sapos 0 :total 3})))
    (is (do (atualiza-total! 5 "C")
            (= @cobaias {:coelhos 5 :ratos 3 :sapos 0 :total 8})))
    (is (do (atualiza-total! 2 "S")
            (= @cobaias {:coelhos 5 :ratos 3 :sapos 2 :total 10})))
    (is (do (atualiza-total! -1 "C")
            (= @cobaias {:coelhos 4 :ratos 3 :sapos 2 :total 9})))))


(deftest percentagem-test
  (testing "se a funçao retorna o percentual.")
  (is (= (percentagem 50 100) 50.0))
  (is (= (percentagem 3 6) 50.0))
  (is (= (percentagem 1 1) 100.0))
  (is (= (percentagem 25 100) 25.0)))


(deftest resposta-test
  (testing "se o retorno tem a resposta correta.")
  (do (atualiza-total! 3 "R")
      (atualiza-total! 5 "C")
      (atualiza-total! 2 "S"))

  (is (= (resposta!) {:coelhos 5 :ratos 3 :sapos 2 :total 10 :percentagem-coelhos 50.0 :percentagem-sapos 20.0 :percentagem-ratos 30.0})))

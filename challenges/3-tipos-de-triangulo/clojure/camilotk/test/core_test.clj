(ns core-test
  (:require
    [clojure.test :refer :all]
    [core :refer :all]))


(deftest verifica-triangulo-test
  (testing "Testando se retorna os tipos corretos de triângulos."
    (is (= (verifica-triangulo [7.0 7.0 5.0]) '("TRIANGULO ISOSCELES" "TRIANGULO ACUTANGULO")))
    (is (= (verifica-triangulo [10.0 6.0 6.0]) '("TRIANGULO ISOSCELES" "TRIANGULO OBTUSANGULO")))
    (is (= (verifica-triangulo [6.0 6.0 6.0]) '("TRIANGULO EQUILATERO" "TRIANGULO ACUTANGULO")))
    (is (= (verifica-triangulo [7.0 5.0 2.0]) '("NAO FORMA TRIANGULO")))))


(deftest strs->floats-test
  (testing "Testando se há a conversão de uma lista de strings para floats."
    (is (= (strs->floats '("1.0" "2.0" "3.0")) '(1.0 2.0 3.0)))
    (is (= (strs->floats '("9.5" "3.2" "1.0")) '(9.5 3.2 1.0)))
    (is (= (strs->floats '("-3.2" "-2.9" "3.0")) '(-3.2 -2.9 3.0)))))

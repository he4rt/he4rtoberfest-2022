(ns core
  (:require
    [clojure.string :as str]))


(defn verifica-triangulo
  "Verifica se um triangulo é ... baseado nas entradas."
  [lados]

  (let [a  (first lados)
        b (second lados)
        c (last lados)
        r (atom ())]

    (when (= (Math/pow a 2) (+ (Math/pow b 2) (Math/pow c 2)))
      (swap! r conj "TRIANGULO RETANGULO"))

    (when  (> (Math/pow a 2) (+ (Math/pow b 2) (Math/pow c 2)))
      (swap! r conj "TRIANGULO OBTUSANGULO"))

    (when (< (Math/pow a 2) (+ (Math/pow b 2) (Math/pow c 2)))
      (swap! r conj "TRIANGULO ACUTANGULO"))

    (when (= a b c)
      (swap! r conj "TRIANGULO EQUILATERO"))

    (when (or (and (= a b) (not= b c)) (and (= b c) (not= a b)) (and (= a c) (not= c b)))
      (swap! r conj "TRIANGULO ISOSCELES"))

    (when (>= a (+ b c))
      (do
        (reset! r ())
        (swap! r conj "NAO FORMA TRIANGULO")))

    @r))


(defn strs->floats
  "Recebe uma lista de valores numéricos em string e retorna uma lista de floats."
  [valores]
  (map #(Double/parseDouble %) valores))


(defn imprime-resultados!
  "Recebe uma lista de strings e imprime seus elementos no console."
  [resultados]
  (dorun (map #(println %) resultados)))


(defn -main
  "Função Main."
  [& args]
  (if (nil? args)
    (do (.print (System/out) "Entrada ")
        (flush)
        (def entrada (strs->floats (str/split (read-line) #"\s"))))
    (def entrada (strs->floats args)))

  (imprime-resultados! (verifica-triangulo (sort > entrada)))
  :ok)

(ns core)

(defn fizz-buzz
  "A função recebe um número qualquer e checa se é fizz, buzz ou fizzbuzz fazendo o retorno."
  [numero]
  (let [fizz? (zero? (rem numero 3))
        buzz? (zero? (rem numero 5))
        fizz-buzz? (and fizz? buzz?)]
    (cond
      fizz-buzz? "fizzbuzz"
      fizz? "fizz"
      buzz? "buzz"
      :else numero)))

(defn imprime! 
  [numeros]
  (dorun (map #(println %) numeros)))

(defn -main
  "Função main. "
  [& args]

  (if (some? args)
    (def numero (Integer/parseInt (first args)))
    (do (.print (System/out) "Numero: ")
        (flush)
        (def numero (Integer/parseInt (read-line)))))

  (imprime! (map fizz-buzz (range 1 (inc numero)))))

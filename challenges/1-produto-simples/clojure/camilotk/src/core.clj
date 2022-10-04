(ns core)

(defn read-number!
  "Read a number from console"
  []
  (print "Digite um número: ")
  (flush)
  (Integer/parseInt (read-line)))

(defn -main
  "Main function"
  [& args]

  (if (= args nil)
    (do (def primeiro (read-number!))
        (def segundo (read-number!)))
    (do (def primeiro (Integer/parseInt (first args)))
        (def segundo (Integer/parseInt (second args)))))

  (printf "PROD = %d\n" (* primeiro segundo))
  :ok)



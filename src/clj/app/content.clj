(ns app.content
  (:require [clojure.string :as str]))

(defn mdfmt [md]
  "Applies text formatting to the markdown before serving as content."
  ;; change image paths from relative (for GitHub preview) to absolute (for
  ;; serving as webpage)
  (str/replace md "../../html/img/" "/img/"))

(defmacro en-sabong-md []
  (mdfmt (slurp "./content/en/sabong.md") ))

(defmacro en-civara-md []
  (mdfmt (slurp "./content/en/civara.md") ))

(defmacro en-sanghati-md []
  (mdfmt (slurp "./content/en/sanghati.md")))

(defmacro en-borders-md []
  (mdfmt (slurp "./content/en/borders.md")))

(defmacro en-tools-md []
  (mdfmt (slurp "./content/en/tools.md")))

(defmacro th-sabong-md []
  (mdfmt (slurp "./content/th/sabong.md") ))

(defmacro th-civara-md []
  (mdfmt (slurp "./content/th/civara.md") ))

(defmacro th-sanghati-md []
  (mdfmt (slurp "./content/th/sanghati.md")))

(defmacro th-borders-md []
  (mdfmt (slurp "./content/th/borders.md")))

(defmacro th-tools-md []
  (mdfmt (slurp "./content/th/tools.md")))

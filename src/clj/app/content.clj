(ns app.content
  (:require [clojure.string :as str]))

(defmacro en-home-md []
  (slurp "./content/en/home.md"))

(defmacro en-sabong-md []
  (slurp "./content/en/sabong.md"))

(defmacro en-civara-md []
  (slurp "./content/en/civara.md"))

(defmacro en-sanghati-md []
  (slurp "./content/en/sanghati.md"))

(defmacro en-borders-md []
  (slurp "./content/en/borders.md"))

(defmacro en-tools-md []
  (slurp "./content/en/tools.md"))

(defmacro en-robe-size-note-md []
  (slurp "./content/en/robe-size-note.md"))

(defmacro th-home-md []
  (slurp "./content/th/home.md"))

(defmacro th-sabong-md []
  (slurp "./content/th/sabong.md"))

(defmacro th-civara-md []
  (slurp "./content/th/civara.md"))

(defmacro th-sanghati-md []
  (slurp "./content/th/sanghati.md"))

(defmacro th-borders-md []
  (slurp "./content/th/borders.md"))

(defmacro th-tools-md []
  (slurp "./content/th/tools.md"))

(defmacro th-robe-size-note-md []
  (slurp "./content/th/robe-size-note.md"))

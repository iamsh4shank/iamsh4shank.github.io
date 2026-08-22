# Monkey patch for bibtex-ruby incompatibility with Ruby 3.x
# In Ruby 3.x, String.instance_methods(false) includes :dup and :clone.
# BibTeX::Name was delegating :dup and :clone to to_s (String), causing
# Name#dup to return a String instead of a BibTeX::Name struct.
# This caused "undefined method `to_citeproc` for an instance of String" errors.

require 'bibtex'

module BibTeX
  class Name
    def dup
      super
    end

    def clone
      super
    end
  end
end

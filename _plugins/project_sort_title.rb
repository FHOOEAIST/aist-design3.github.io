# Derives a `sort_title` for every project, used to order the project listings.
#
# A third of the projects are titled "Projekt <name>" / "Project <name>" (with
# or without a colon). Sorting on `title` clumps all of those together under P,
# so "Projekt Wildschwein" lands next to "Projekt AKFA" instead of near "WTA".
# Stripping the prefix sorts them by the name that actually distinguishes them.
#
# The listings consume this via `sort_natural: "sort_title"` -- sort_natural
# rather than sort because Liquid's sort is ASCII-ordered, which would file
# "eEKP" after "WTA" and "ATG-Miner" before "AlpinIO".
#
# A project titled only "Projekt" keeps its full title as the key, so it still
# sorts somewhere sensible instead of on an empty string.

module AistProjectSortTitle
  PREFIX = /\A(?:Projekt|Project)\b[[:space:]]*:?[[:space:]]*/

  def self.sort_title_for(title)
    stripped = title.sub(PREFIX, "").strip
    stripped.empty? ? title : stripped
  end
end

Jekyll::Hooks.register :site, :post_read do |site|
  collection = site.collections["projects"]
  next if collection.nil?

  collection.docs.each do |doc|
    title = doc.data["title"].to_s
    doc.data["sort_title"] = AistProjectSortTitle.sort_title_for(title)
  end
end

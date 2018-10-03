# @pokemon.each do |poke|
#   json.set! poke.id do
#     json.extract! poke, :id, :name
#     json.image_url asset_path(poke.image_url)
#
json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type,
    :image_url, :item_ids
end

json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
  json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
end
end
end

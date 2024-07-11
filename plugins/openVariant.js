const plugin = require("tailwindcss/plugin")
// create custom variant - "group-open" variant
const openVariant = plugin(function({addVariant}){
  addVariant("group-open", ":merge(.group).open &"); // merging ".group" - which is an existing variant - with ".open" - which is a new variant.
  addVariant("peer-open", ":merge(.peer).open ~ &"); // merging ".peer" - which is an existing variant - with ".open" - which is a new variant.
})

module.exports = openVariant;
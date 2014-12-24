var syncPrompt = require('sync-prompt').prompt

module.exports = function(msg){
  return syncPrompt(msg + ' ')
}
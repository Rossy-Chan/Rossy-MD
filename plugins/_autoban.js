let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('1' || '212')) {
   	global.db.data.users[m.sender].banned = true
   }
   
   if (m.sender.startsWith('265' || '92')) {
   	global.db.data.users[m.sender].banned = true
   }
    }

export default handler

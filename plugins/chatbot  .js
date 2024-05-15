//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هاري احبك|احبك$/i.test(m.text)) { 
     responses = [ 
 '*my love is jeny wezly*', 
     ]; 
     }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       '*If you say another bot, I will charm you*',  
     ]; 
   }else if (/^كاكاشي$/i.test(m.text)) { 
   responses = [ 
'*is unkel*', 
     ]; 
   }else if (/^هاري$/i.test(m.text)) { 
   responses = [ 
'*what*', 
     ]; 

      }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
'*my name is harry potte*', 
     ]; 
 }else if (/^فولدمورت$/i.test(m.text)) {
     responses = [ 
'*Great magician*', 
     ]; 
   }else if (/^رون ويزلي$/i.test(m.text)) { 
     responses = [ 
'*is my best frend*', 
      
   ]; 
   }else if (/^هيرموني جرانجر$/i.test(m.text)) { 
     responses = [
       '*Smart a witch*', 
     ]; 
   }else if (/^دمبلدور$/i.test(m.text)) { 
     responses = [ 
'*اعظم ساحر*',
]; 
     
     }else if (/^جريفندور$/i.test(m.text)) { 
     responses = [ 
       '*is the best house*',  

     ]; 
}else if (/^هاجريد/i.test(m.text)) { 
     responses = [ 
       '*The best animal breeder*',  

     ]; 
   }else if (/^سيريوس$/i.test(m.text)) { 
     responses = [ 
'*My godfather*', 
     ]; 
   } else if (/^سنايب$/i.test(m.text)) { 
     responses = [ 
'*The best magician in the arts of defense against black magic*'
     ]; 
     }else if (/^هوجروتس$/i.test(m.text)) { 
     responses = [ 
       'The best school for teaching magic',  

     ];
     }else if (/^ماغوناغل$/i.test(m.text)) { 
     responses = [ 
       '*The best housemaid in Gryffindor house*',  

     ];
     }else if (/^نيفيل$/i.test(m.text)) { 
     responses = [ 
       '*The best botanist*',  
       
     ];
     }else if (/^شيموس$/i.test(m.text)) { 
     responses = [ 
       '*The explosive*',  

     ];
     }else if (/^لوبين$/i.test(m.text)) { 
     responses = [ 
       '*User of the Patronam spell*',  
     
     ]; 
     }else if (/^مالفوي$/i.test(m.text)) { 
     responses = [ 
'*coward*', 
     
     ];
     }else if (/^مادي$/ .test(m.text)) { 
     responses = [ 
       '*The dungeon filler of Azkaban*',  
     ];
       }else if (/^فريد|جورج$/ .test(m.text)) { 
       responses = [ 
        '*The best people who used magic for fun*', 
     ]; 
            }else if (/^كروكشانكس$/i.test(m.text)) { 
     responses = [ 
     '*The worst cat*', 
     ];
            }else if (/^سيدريك ديجوري$/i.test(m.text)) { 
     responses = [ 
    '*The handsome one*', 
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;

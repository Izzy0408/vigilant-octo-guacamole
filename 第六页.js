document.addEventListener('DOMContentLoaded', function() {  
    // 获取所有的音乐文本元素  
    const musicTexts = document.querySelectorAll('.music-text');  
      
    // 遍历每个音乐文本元素并添加点击事件监听器  
    musicTexts.forEach(function(musicText) {  
      musicText.addEventListener('click', function() {  
        // 获取当前文本元素的ID，并构建对应的audio元素的ID  
        const audioId = this.id + '-audio';  
        const audioPlayer = document.getElementById(audioId);  
          
        // 停止所有其他音频的播放（如果有的话）  
        const allAudios = document.querySelectorAll('audio');  
        allAudios.forEach(audio => {  
          if (audio !== audioPlayer && !audio.paused && !audio.ended) {  
            audio.pause();  
          }  
        });  
          
        // 播放当前点击的音频  
        if (audioPlayer) {  
          if (audioPlayer.paused || audioPlayer.ended) {  
            audioPlayer.play();  
          }  
        }  
      });  
    });  
  });
document.addEventListener('DOMContentLoaded', function() {  
    // 假设我们有一个变量来存储当前播放的音频  
    let currentAudio = null;  
    
    // 定义一个函数来播放音频并暂停其他音频  
    function playAudio(audioId) {  
      // 获取要播放的音频元素  
      const audioPlayer = document.getElementById(audioId);  
    
      // 如果有当前音频并且不是同一个音频，则暂停当前音频  
      if (currentAudio && currentAudio !== audioPlayer && !currentAudio.paused && !currentAudio.ended) {  
        currentAudio.pause();  
      }  
    
      // 更新当前音频变量  
      currentAudio = audioPlayer;  
    
      // 播放音频  
      if (audioPlayer.paused || audioPlayer.ended) {  
        audioPlayer.play();  
      }  
    }  
    
    // 为每个音乐文本元素添加点击事件监听器  
    const musicTexts = document.querySelectorAll('.music-text');  
    musicTexts.forEach(function(musicText) {  
      musicText.addEventListener('click', function() {  
        // 假设音乐文本的id与audio标签的id有相同的后缀（例如 "electric-harmony" 对应 "electric-harmony-audio"）  
        const audioId = this.id + '-audio';  
        playAudio(audioId);  
      });  
    });  
  });
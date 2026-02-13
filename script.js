// ================================
// VALENTINE'S DAY INTERACTIVE SCRIPT
// ================================

// Configuration
const CONFIG = {
    heartsCount: 15,
    petalsCount: 25,
    explosionHeartsCount: 20,
    heartEmojis: ['❤️', '💕', '💖', '💗', '💝', '💓'],
    petalColors: ['#ff6b9d', '#ffc2d4', '#ff9ec4', '#ffb3d0'],
    totalPhotos: 10
};

// ================================
// FLOATING HEARTS ANIMATION
// ================================
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    
    for (let i = 0; i < CONFIG.heartsCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = CONFIG.heartEmojis[Math.floor(Math.random() * CONFIG.heartEmojis.length)];
        
        // Random positioning and animation
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.animationDuration = `${8 + Math.random() * 4}s`;
        heart.style.fontSize = `${1 + Math.random() * 1.5}rem`;
        
        container.appendChild(heart);
    }
}

// ================================
// FALLING ROSE PETALS ANIMATION
// ================================
function createFallingPetals() {
    const container = document.getElementById('petalsContainer');
    
    for (let i = 0; i < CONFIG.petalsCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Random styling
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.backgroundColor = CONFIG.petalColors[Math.floor(Math.random() * CONFIG.petalColors.length)];
        petal.style.animationDelay = `${Math.random() * 5}s`;
        petal.style.animationDuration = `${10 + Math.random() * 5}s`;
        petal.style.width = `${8 + Math.random() * 8}px`;
        petal.style.height = `${8 + Math.random() * 8}px`;
        
        container.appendChild(petal);
    }
}

// ================================
// HEART EXPLOSION ANIMATION
// ================================
function createHeartExplosion(x, y) {
    const container = document.getElementById('explosionContainer');
    
    for (let i = 0; i < CONFIG.explosionHeartsCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'explosion-heart';
        heart.textContent = CONFIG.heartEmojis[Math.floor(Math.random() * CONFIG.heartEmojis.length)];
        
        // Position at click location
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        
        // Random explosion trajectory
        const angle = (Math.PI * 2 * i) / CONFIG.explosionHeartsCount;
        const distance = 100 + Math.random() * 150;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        const rotation = Math.random() * 720 - 360;
        
        heart.style.setProperty('--tx', `${tx}px`);
        heart.style.setProperty('--ty', `${ty}px`);
        heart.style.setProperty('--rotation', `${rotation}deg`);
        
        container.appendChild(heart);
        
        // Remove after animation completes
        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
    
    // Add haptic feedback on mobile devices
    if (navigator.vibrate) {
        navigator.vibrate([50, 30, 50]);
    }
}

// ================================
// LOVE BUTTON INTERACTION
// ================================
function initializeLoveButton() {
    const button = document.getElementById('loveButton');
    
    button.addEventListener('click', function(e) {
        // Get button center position
        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        // Create explosion effect
        createHeartExplosion(x, y);
        
        // Add pulse animation to button
        button.style.animation = 'none';
        setTimeout(() => {
            button.style.animation = '';
        }, 10);
        
        // Show a message
        showLoveMessage();
    });
}

// ================================
// LOVE MESSAGE DISPLAY
// ================================
function showLoveMessage() {
    const messages = [
        "Love sent! 💕",
        "Hearts received! ❤️",
        "You're amazing! 💖",
        "Spreading love! 💝",
        "Love is in the air! 💗"
    ];
    
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    // Create temporary message element
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 107, 157, 0.95);
        color: white;
        padding: 1.5rem 3rem;
        border-radius: 50px;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        z-index: 1000;
        pointer-events: none;
        animation: messageAppear 2s ease-out forwards;
        box-shadow: 0 10px 40px rgba(196, 69, 105, 0.4);
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes messageAppear {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
            20% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.1);
            }
            30% {
                transform: translate(-50%, -50%) scale(1);
            }
            80% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -60%) scale(0.9);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(messageEl);
    
    // Remove after animation
    setTimeout(() => {
        messageEl.remove();
        style.remove();
    }, 2000);
}

// ================================
// BACKGROUND MUSIC CONTROL
// ================================
function initializeMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;
    
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
            isPlaying = false;
            console.log('Music paused');
        } else {
            // Attempt to play
            const playPromise = bgMusic.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        musicToggle.classList.add('playing');
                        isPlaying = true;
                        console.log('Music playing');
                    })
                    .catch(err => {
                        console.log('Audio play failed:', err);
                        showMusicMessage();
                    });
            }
        }
    });
    
    // Auto-play attempt (will only work if user has interacted with page)
    bgMusic.volume = 0.3; // Set to 30% volume for pleasant background music
}

function showMusicMessage() {
    const messageEl = document.createElement('div');
    messageEl.innerHTML = `
        <div style="text-align: center;">
            <p style="margin-bottom: 1rem; font-size: 1.2rem;">🎵 Music Setup</p>
            <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">To enable background music:</p>
            <p style="font-size: 0.85rem; line-height: 1.6;">
                1. Create a folder named "music" in the same directory<br>
                2. Add your romantic song as "romantic-song.mp3"<br>
                3. Click the music button again 💕
            </p>
        </div>
    `;
    messageEl.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.98);
        color: #c44569;
        padding: 2rem 3rem;
        border-radius: 20px;
        font-family: 'Montserrat', sans-serif;
        z-index: 1000;
        box-shadow: 0 20px 60px rgba(196, 69, 105, 0.3);
        border: 2px solid #ffc2d4;
        max-width: 90%;
        animation: messageSlideIn 0.5s ease-out;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes messageSlideIn {
            0% {
                opacity: 0;
                transform: translate(-50%, -40%);
            }
            100% {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(messageEl);
    
    // Remove after 5 seconds
    setTimeout(() => {
        messageEl.style.opacity = '0';
        messageEl.style.transform = 'translate(-50%, -60%)';
        setTimeout(() => {
            messageEl.remove();
            style.remove();
        }, 500);
    }, 5000);
    
    // Click to dismiss
    messageEl.addEventListener('click', () => {
        messageEl.remove();
        style.remove();
    });
}

// ================================
// PHOTO GALLERY FUNCTIONALITY
// ================================
function initializePhotoGallery() {
    const indicators = document.getElementById('galleryIndicators');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    const photoItems = document.querySelectorAll('.photo-item');
    
    // Create indicator dots
    for (let i = 0; i < CONFIG.totalPhotos; i++) {
        const dot = document.createElement('div');
        dot.className = 'indicator-dot';
        if (i === 0) dot.classList.add('active');
        dot.dataset.index = i;
        
        dot.addEventListener('click', () => {
            scrollToPhoto(i);
        });
        
        indicators.appendChild(dot);
    }
    
    // Scroll to photo function
    function scrollToPhoto(index) {
        const targetPhoto = photoItems[index];
        if (targetPhoto) {
            targetPhoto.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            updateActiveDot(index);
        }
    }
    
    // Update active dot
    function updateActiveDot(index) {
        const dots = document.querySelectorAll('.indicator-dot');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
    
    // Navigation buttons
    let currentIndex = 0;
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + CONFIG.totalPhotos) % CONFIG.totalPhotos;
        scrollToPhoto(currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % CONFIG.totalPhotos;
        scrollToPhoto(currentIndex);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
    
    // Intersection Observer for auto-updating active dot on scroll
    const observerOptions = {
        root: null,
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.dataset.index);
                updateActiveDot(index);
                currentIndex = index;
            }
        });
    }, observerOptions);
    
    photoItems.forEach(item => observer.observe(item));
}

// ================================
// PHOTO CLICK INTERACTION
// ================================
function initializePhotoInteractions() {
    const photoFrames = document.querySelectorAll('.photo-frame');
    
    photoFrames.forEach((frame, index) => {
        frame.addEventListener('click', () => {
            // Create heart burst at photo location
            const rect = frame.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            createHeartExplosion(x, y);
            
            // Optional: You can add a modal/lightbox here to show full-size image
            console.log(`Photo ${index + 1} clicked!`);
        });
    });
}

// ================================
// CURSOR HEART TRAIL (Desktop)
// ================================
function initializeHeartTrail() {
    let lastTime = 0;
    const throttleDelay = 200; // Create heart every 200ms
    
    document.addEventListener('mousemove', function(e) {
        const currentTime = Date.now();
        
        // Throttle heart creation
        if (currentTime - lastTime < throttleDelay) return;
        lastTime = currentTime;
        
        // Only on desktop (not on mobile)
        if (window.innerWidth < 768) return;
        
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            font-size: 1rem;
            pointer-events: none;
            z-index: 9999;
            animation: trailFade 1.5s ease-out forwards;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(heart);
        
        // Remove after animation
        setTimeout(() => heart.remove(), 1500);
    });
    
    // Add trail fade animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes trailFade {
            0% {
                opacity: 0.8;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -100%) scale(0.3);
            }
        }
    `;
    document.head.appendChild(style);
}

// ================================
// KEYBOARD ACCESSIBILITY
// ================================
function initializeKeyboardControls() {
    // Allow Enter/Space to trigger button
    document.getElementById('loveButton').addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
    
    document.getElementById('musicToggle').addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
}

// ================================
// PERFORMANCE OPTIMIZATION
// ================================
function optimizeForPerformance() {
    // Reduce animations on low-performance devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.documentElement.style.setProperty('--reduced-motion', '1');
    }
    
    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', function() {
        const bgMusic = document.getElementById('bgMusic');
        
        if (document.hidden) {
            document.querySelectorAll('.floating-heart, .petal').forEach(el => {
                el.style.animationPlayState = 'paused';
            });
            // Optionally pause music when tab is hidden
            // bgMusic.pause();
        } else {
            document.querySelectorAll('.floating-heart, .petal').forEach(el => {
                el.style.animationPlayState = 'running';
            });
        }
    });
}

// ================================
// IMAGE ERROR HANDLING
// ================================
function handleImageErrors() {
    const images = document.querySelectorAll('.gallery-photo');
    
    images.forEach((img, index) => {
        img.addEventListener('error', function() {
            // If image fails to load, show placeholder
            this.style.background = 'linear-gradient(135deg, #ffc2d4, #ff9ec4)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            
            // Add text overlay
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-family: 'Montserrat', sans-serif;
                color: white;
                font-size: 1rem;
                text-align: center;
                padding: 1rem;
            `;
            placeholder.innerHTML = `📸<br>Photo ${index + 1}<br><small>Add your image to<br>photos/photo${index + 1}.jpg</small>`;
            this.parentElement.appendChild(placeholder);
        });
    });
}

// ================================
// INITIALIZE ON PAGE LOAD
// ================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('💝 Happy Valentine\'s Day! 💝');
    console.log('Instructions:');
    console.log('1. Add your 10 photos to the "photos" folder (photo1.jpg to photo10.jpg)');
    console.log('2. Add your romantic music to the "music" folder as "romantic-song.mp3"');
    console.log('3. Enjoy your beautiful Valentine\'s Day website! 💕');
    
    // Initialize all features
    createFloatingHearts();
    createFallingPetals();
    initializeLoveButton();
    initializeMusicToggle();
    initializePhotoGallery();
    initializePhotoInteractions();
    initializeHeartTrail();
    initializeKeyboardControls();
    optimizeForPerformance();
    handleImageErrors();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});

// ================================
// RESIZE HANDLER
// ================================
window.addEventListener('resize', function() {
    // Adjust animations on orientation change
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        // Reduce particle count on mobile for better performance
        document.documentElement.style.setProperty('--particle-count', '10');
    }
});

// ================================
// EASTER EGG: KONAMI CODE
// ================================
(function() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Trigger massive heart explosion
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        createHeartExplosion(
                            window.innerWidth / 2,
                            window.innerHeight / 2
                        );
                    }, i * 200);
                }
                
                // Show secret message
                showLoveMessage();
                
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
})();

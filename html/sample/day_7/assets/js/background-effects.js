// Background data effects generator
document.addEventListener('DOMContentLoaded', function() {
    createDataParticles();
    createBinaryStreams();
    createDataNodes();
    createDataConnections();
});

function createDataParticles() {
    const container = document.getElementById('data-particles');
    const dataValues = ['0', '1', 'A', 'B', 'C', 'D', 'E', 'F', 'SQL', 'API', 'JSON', 'XML', 'DB', 'ETL'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'data-particle';
        particle.textContent = dataValues[Math.floor(Math.random() * dataValues.length)];
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        
        container.appendChild(particle);
    }
}

function createBinaryStreams() {
    const container = document.getElementById('binary-stream');
    
    for (let i = 0; i < 8; i++) {
        const line = document.createElement('div');
        line.className = 'binary-line';
        
        // Random horizontal position
        line.style.left = Math.random() * 100 + '%';
        line.style.animationDelay = Math.random() * 12 + 's';
        
        container.appendChild(line);
    }
}

function createDataNodes() {
    const container = document.getElementById('data-nodes');
    
    for (let i = 0; i < 15; i++) {
        const node = document.createElement('div');
        node.className = 'data-node';
        
        // Random position
        node.style.left = Math.random() * 100 + '%';
        node.style.top = Math.random() * 100 + '%';
        node.style.animationDelay = Math.random() * 8 + 's';
        
        container.appendChild(node);
    }
}

function createDataConnections() {
    const container = document.getElementById('data-connections');
    
    for (let i = 0; i < 5; i++) {
        const connection = document.createElement('div');
        connection.className = 'data-connection';
        
        // Random position and angle
        const angle = Math.random() * 360;
        const length = 50 + Math.random() * 100;
        
        connection.style.left = Math.random() * 100 + '%';
        connection.style.top = Math.random() * 100 + '%';
        connection.style.width = length + 'px';
        connection.style.transform = `rotate(${angle}deg)`;
        connection.style.animationDelay = Math.random() * 25 + 's';
        
        container.appendChild(connection);
    }
}

// Regenerate effects periodically for variety
setInterval(function() {
    // Remove old elements
    document.getElementById('data-particles').innerHTML = '';
    document.getElementById('binary-stream').innerHTML = '';
    document.getElementById('data-nodes').innerHTML = '';
    document.getElementById('data-connections').innerHTML = '';
    
    // Create new elements
    createDataParticles();
    createBinaryStreams();
    createDataNodes();
    createDataConnections();
}, 30000); // Regenerate every 30 seconds
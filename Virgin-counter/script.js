// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');
    const fabContainer = document.querySelector('.fab-container');

    // Show FABs with delay
    setTimeout(() => {
        fabContainer.classList.add('visible');
    }, 800);

    function toggleMobileMenu() {
        const isOpening = !mobileMenuToggle.classList.contains('active');
        
        mobileMenuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Toggle FABs visibility when menu is open
        if (isOpening) {
            fabContainer.style.opacity = '0';
            fabContainer.style.pointerEvents = 'none';
        } else {
            setTimeout(() => {
                fabContainer.style.opacity = '1';
                fabContainer.style.pointerEvents = 'auto';
            }, 300);
        }
        
        // Add ripple effect to menu button
        if (isOpening) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            mobileMenuToggle.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    }

    mobileMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
    });

    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            toggleMobileMenu();
        }
    });

    mobileCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
    });

    // Close menu when clicking outside
    mobileNav.addEventListener('click', (e) => {
        if (e.target === mobileNav) {
            toggleMobileMenu();
        }
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });
    });

    // Connect FAB buttons to their functions
    document.getElementById('generateReportBtn').addEventListener('click', () => {
        generateReport();
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        resetCounters();
    });

    // Add click effect to FABs
    document.querySelectorAll('.fab').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            this.appendChild(ripple);
            
            // Position the ripple effect
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size/2}px`;
            ripple.style.top = `${e.clientY - rect.top - size/2}px`;
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    function closeMobileMenu() {
        mobileNav.classList.remove('mobile-nav-open');
        mobileMenuOverlay.style.opacity = '0';
        mobileMenuToggle.classList.remove('active');
        setTimeout(() => {
            mobileMenuOverlay.style.display = 'none';
        }, 300);
    }
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const mobileTabName = this.getAttribute('data-tab');
            if (!mobileTabName) return;

            let targetTabId = mobileTabName + '-tab';

            // Deactivate all tabs and content
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.querySelectorAll('.mobile-nav-link').forEach(link => link.classList.remove('active'));

            // Activate the selected tab and content
            const tabButton = document.querySelector(`.tab-button[data-tab='${targetTabId}']`);
            const tabContent = document.getElementById(targetTabId);

            if (tabButton) {
                tabButton.classList.add('active');
            }
            if (tabContent) {
                tabContent.classList.add('active');
            }
            
            this.classList.add('active');
            closeMobileMenu();
        });
    });
}

// Package data
const packages = {
    virgin: [
        { id: 'virgin419', name: '419', value: 419 },
        { id: 'virgin212', name: '212', value: 212 },
        { id: 'virgin172', name: '172', value: 172 },
        { id: 'virgin126', name: '126', value: 126 },
        { id: 'virgin115', name: '115', value: 115 },
        { id: 'virgin103', name: '103', value: 103 },
        { id: 'virgin80', name: '80', value: 80 },
        { id: 'virgin51', name: '51', value: 51 }
    ],
    friendi: [
        { id: 'friendiFlex345', name: 'فليكس 345', value: 345 },
        { id: 'friendi126', name: '126', value: 126 },
        { id: 'friendiFlex115', name: '115 فليكس', value: 115 },
        { id: 'friendi114', name: '114', value: 114 },
        { id: 'friendi97', name: '97', value: 97 },
        { id: 'friendi80', name: '80', value: 80 },
        { id: 'friendiFlex69', name: '69 فليكس', value: 69 },
        { id: 'friendi63', name: '63', value: 63 },
        { id: 'friendi50', name: '50', value: 50 },
        { id: 'friendi34', name: '34', value: 34 }
    ],
    switch: [
        { id: 'switch365', name: '365', value: 365 },
        { id: 'switch200', name: '200', value: 200 },
        { id: 'switch180', name: '180', value: 180 },
        { id: 'switch150', name: '150', value: 150 },
        { id: 'switch120', name: '120', value: 120 }
    ],
    data: [
        { id: 'data517', name: '517', value: 517 },
        { id: 'data253', name: '253', value: 253 },
        { id: 'data172', name: '172', value: 172 },
        { id: 'data97', name: '97', value: 97 }
    ]
};

// Sort packages in descending order and add prefixes
function preparePackages() {
    // Sort virgin packages
    packages.virgin.sort((a, b) => b.value - a.value);
    packages.virgin.forEach(pkg => {
        pkg.displayName = `ڤيرجن ${pkg.name}`;
    });
    
    // Sort friendi packages
    packages.friendi.sort((a, b) => b.value - a.value);
    packages.friendi.forEach(pkg => {
        pkg.displayName = pkg.name.includes('فليكس') ? 
            `فريندي ${pkg.name}` : 
            `فريندي ${pkg.name}`;
    });
    
    // Sort switch packages
    packages.switch.sort((a, b) => b.value - a.value);
    packages.switch.forEach(pkg => {
        pkg.displayName = `سويتش ${pkg.name}`;
    });
    
    // Sort data packages
    packages.data.sort((a, b) => b.value - a.value);
    packages.data.forEach(pkg => {
        pkg.displayName = `بيانات ${pkg.name}`;
    });
}

// Call this function to prepare packages when the script loads
preparePackages();

// Initialize counters
let counters = {};

// Initialize the app
function initApp() {
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('saleDate').value = today;
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Setup tabs
    setupTabs();
    
    // Initialize counters
    initializeCounters();
    
    // Render package lists
    renderPackageList('virgin-packages', packages.virgin);
    renderPackageList('friendi-packages', packages.friendi);
    renderPackageList('switch-packages', packages.switch);
    renderPackageList('data-packages', packages.data);
}

// Initialize counters
function initializeCounters() {
    // Initialize all package counters to 0
    Object.values(packages).forEach(category => {
        category.forEach(pkg => {
            counters[pkg.id] = 0;
        });
    });
}

// Set up tab switching functionality
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // Toggle theme based on active tab
            if (tabId === 'friendi-tab') {
                document.body.classList.add('friendi-theme');
            } else {
                document.body.classList.remove('friendi-theme');
            }
            
            // Update mobile nav active state
            const tabName = tabId.replace('-tab', '');
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                if (link.getAttribute('data-tab') === tabName) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        });
    });
}

// Render package list
function renderPackageList(containerId, packageList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    packageList.forEach(pkg => {
        const packageElement = document.createElement('div');
        packageElement.className = 'package-card';
        packageElement.innerHTML = `
            <div class="package-info">
                <span class="package-name">${pkg.displayName}</span>
                <div class="counter">
                    <button onclick="updateCount('${pkg.id}', 1)"><i class="fas fa-plus"></i></button>
                    <span id="${pkg.id}">0</span>
                    <button onclick="updateCount('${pkg.id}', -1)"><i class="fas fa-minus"></i></button>
                </div>
            </div>
        `;
        container.appendChild(packageElement);
    });
}

// Update counter value
function updateCount(id, change) {
    if (!counters.hasOwnProperty(id)) {
        counters[id] = 0;
    }
    
    counters[id] = Math.max(0, counters[id] + change);
    document.getElementById(id).textContent = counters[id];
}

// Generate report with total count
function generateReport() {
    const employeeName = document.getElementById('employeeName').value.trim() || 'غير محدد';
    const saleDate = document.getElementById('saleDate').value || new Date().toISOString().split('T')[0];
    const location = document.getElementById('location').value.trim() || 'غير محدد';
    
    // Format date to include day name in Arabic
    const dateObj = new Date(saleDate);
    const dayNames = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const dayName = dayNames[dateObj.getDay()];
    const yyyymmdd = dateObj.toISOString().split('T')[0];
    const formattedDate = `${dayName}, ${yyyymmdd}`;
    
    let report = 'تقرير المبيعات\n';
    report += `الموظف: ${employeeName}\n`;
    report += `الموقع: ${location}\n`;
    report += `التاريخ: ${formattedDate}\n`;
    report += '='.repeat(20) + '\n\n';
    
    // Add packages to report
    let hasSales = false;
    let totalItems = 0;
    
    // Virgin packages
    let virginSales = packages.virgin.filter(pkg => counters[pkg.id] > 0);
    if (virginSales.length > 0) {
        report += 'باقات ڤيرجن:\n';
        virginSales.forEach(pkg => {
            const count = counters[pkg.id];
            totalItems += count;
            report += `- ${pkg.displayName}: ${count}\n`;
        });
        report += '\n';
        hasSales = true;
    }
    
    // Friendi packages
    let friendiSales = packages.friendi.filter(pkg => counters[pkg.id] > 0);
    if (friendiSales.length > 0) {
        report += 'باقات فريندي:\n';
        friendiSales.forEach(pkg => {
            const count = counters[pkg.id];
            totalItems += count;
            report += `- ${pkg.displayName}: ${count}\n`;
        });
        report += '\n';
        hasSales = true;
    }
    
    // Switch packages
    let switchSales = packages.switch.filter(pkg => counters[pkg.id] > 0);
    if (switchSales.length > 0) {
        report += 'باقات سويتش:\n';
        switchSales.forEach(pkg => {
            const count = counters[pkg.id];
            totalItems += count;
            report += `- ${pkg.displayName}: ${count}\n`;
        });
        report += '\n';
        hasSales = true;
    }
    
    // Data packages
    let dataSales = packages.data.filter(pkg => counters[pkg.id] > 0);
    if (dataSales.length > 0) {
        report += 'باقات البيانات:\n';
        dataSales.forEach(pkg => {
            const count = counters[pkg.id];
            totalItems += count;
            report += `- ${pkg.displayName}: ${count}\n`;
        });
        report += '\n';
        hasSales = true;
    }
    
    if (hasSales) {
        report += '\n' + '='.repeat(20) + '\n';
        report += `المجموع الكلي: ${totalItems}\n`;
    } else {
        report += 'لا توجد مبيعات مسجلة.\n';
    }
    
    const reportOutput = document.getElementById('reportOutput');
    reportOutput.value = report;

    // Automatically copy to clipboard
    navigator.clipboard.writeText(report).then(() => {
        // Visual feedback for copy success
        const reportBtn = document.getElementById('generateReportBtn');
        const originalIcon = reportBtn.innerHTML;
        reportBtn.innerHTML = '<i class="fas fa-check"></i>';
        reportBtn.classList.add('success');

        setTimeout(() => {
            reportBtn.innerHTML = originalIcon;
            reportBtn.classList.remove('success');
        }, 2000); // Revert after 2 seconds
    }).catch(err => {
        console.error('Failed to copy report: ', err);
        // Optionally, show an error message to the user
    });
}

// Copy report to clipboard
function copyToClipboard() {
    const reportOutput = document.getElementById('reportOutput');
    reportOutput.select();
    document.execCommand('copy');
    
    // Show copied message
    const copyButton = document.querySelector('.btn-copy');
    const originalText = copyButton.innerHTML;
    copyButton.innerHTML = '<i class="fas fa-check"></i> تم النسخ';
    
    setTimeout(() => {
        copyButton.innerHTML = originalText;
    }, 2000);
}

// Reset all counters
function resetAll() {
    if (confirm('هل أنت متأكد من إعادة تعيين كل العدادات؟')) {
        // Reset all counters to 0
        Object.keys(counters).forEach(key => {
            counters[key] = 0;
            const element = document.getElementById(key);
            if (element) {
                element.textContent = '0';
            }
        });
        
        // Clear report
        document.getElementById('reportOutput').value = '';
    }
}

// Initialize the app when the page loads
window.onload = initApp;

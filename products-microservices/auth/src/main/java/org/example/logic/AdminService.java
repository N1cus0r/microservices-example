package org.example.logic;

import lombok.RequiredArgsConstructor;
import org.example.db.Admin;
import org.example.db.AdminRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminService {
    @Value("${admin.email}")
    private String adminEmail;

    @Value("${admin.password}")
    private String adminPassword;

    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;

    public void generateAdminUserIfNone() {
        if (adminRepository.findAll().isEmpty()) {
            Admin admin = Admin.builder()
                    .email(adminEmail)
                    .password(passwordEncoder.encode(adminPassword))
                    .build();

            adminRepository.save(admin);
        }
    }
}

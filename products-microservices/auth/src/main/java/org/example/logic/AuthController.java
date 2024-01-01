package org.example.logic;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.jwt.JWTValidationRequestBody;
import org.example.logic.AuthService;
import org.example.logic.AuthenticationRequest;
import org.example.logic.AuthenticationResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("validateJwt")
    public void validateJWT(
            HttpServletRequest request,
            @Valid @RequestBody JWTValidationRequestBody body) {
        authService.validateToken(body.token(), request);
    }

    @PostMapping("login")
    public AuthenticationResponse login (
            @Valid @RequestBody AuthenticationRequest request
    ){
        String token = authService.login(request);
        return new AuthenticationResponse(token);

    }
}
